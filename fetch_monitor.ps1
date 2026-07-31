$out = "c:\Users\Lenovo\OneDrive\Desktop\Samsung demoday\ty\images"
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
      $dl = "https://commons.wikimedia.org/wiki/Special:FilePath/$($file)?width=1000"
      $dest = Join-Path $out ($prefix + ($i+1) + [System.IO.Path]::GetExtension($file).ToLower())
      try {
        Invoke-WebRequest -Uri $dl -OutFile $dest -Headers $ua -TimeoutSec 60
        Write-Host "OK $prefix$($i+1) <- $file"
        $i++
        Start-Sleep -Seconds 4
      } catch {
        Write-Host "FAIL $file : $($_.Exception.Message)"
        Start-Sleep -Seconds 4
      }
    }
  }
  Write-Host "$prefix got $i / $count"
}

Get-Images "Samsung Odyssey monitor" "monitor" 4
Get-Images "computer monitor display" "monitor" 4
Write-Host "DONE"

 
 