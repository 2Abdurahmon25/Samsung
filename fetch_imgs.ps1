$out = "d:\Samsung demoday\ty\images"
$ua = @{"User-Agent"="Mozilla/5.0 (Windows NT 10.0; Win64; x64) SamsungDemo/1.0"}

function Get-Images($query, $prefix, $count) {
  $q = [uri]::EscapeDataString($query)
  $url = "https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=$q&srnamespace=6&srlimit=40&format=json"
  try {
    $r = Invoke-RestMethod -Uri $url -Headers $ua -TimeoutSec 40
  } catch {
    Write-Host "SEARCH FAIL $query : $_"
    return
  }
  $i = 0
  $seen = @{}
  foreach ($s in $r.query.search) {
    if ($i -ge $count) { break }
    $title = $s.title
    if ($title -match '\.(png|jpg|jpeg|webp)$') {
      $file = $title -replace '^File:',''
      if ($seen.ContainsKey($file)) { continue }
      $seen[$file] = $true
      $dl = "https://commons.wikimedia.org/wiki/Special:FilePath/$($file)?width=900"
      $dest = Join-Path $out ($prefix + ($i+1) + [System.IO.Path]::GetExtension($file).ToLower())
      try {
        Invoke-WebRequest -Uri $dl -OutFile $dest -Headers $ua -TimeoutSec 60
        Write-Host "OK $prefix$($i+1) <- $file"
        $i++
      } catch {
        Write-Host "FAIL $file : $($_.Exception.Message)"
      }
    }
  }
  Write-Host "$prefix got $i / $count"
}

Get-Images "Galaxy Z Fold" "fold" 9
Get-Images "Galaxy Z Flip" "flip" 9
Get-Images "Samsung Galaxy Watch" "watch" 2
Get-Images "Samsung Galaxy Buds" "buds" 2
Get-Images "Samsung Galaxy Tab" "tab" 2
Get-Images "Samsung Galaxy Book" "book" 2
Write-Host "DONE"
