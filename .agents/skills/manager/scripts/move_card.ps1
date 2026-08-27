param (
    [Parameter(Mandatory=$true)]
    [string]$CardPattern,
    
    [Parameter(Mandatory=$true)]
    [ValidateSet("0-backlog", "1-todo", "2-doing", "3-test", "4-done", "5-reject", "6-archived")]
    [string]$TargetStage
)

$stages = @("0-backlog", "1-todo", "2-doing", "3-test", "4-done", "5-reject", "6-archived")
$found = $false

foreach ($stage in $stages) {
    if (Test-Path $stage) {
        $matches = Get-ChildItem -Path $stage -Filter "*.md" | Where-Object { 
            ($_.Name -like "*$CardPattern*") -and ($_.Name -ne "README.md") -and ($_.Name -ne "00-backlog-overview.md")
        }
        
        foreach ($item in $matches) {
            $found = $true
            if ($stage -eq $TargetStage) {
                Write-Host "Card '$($item.Name)' is already in '$TargetStage'." -ForegroundColor Yellow
            } else {
                $dest = Join-Path $TargetStage $item.Name
                Move-Item -Path $item.FullName -Destination $dest -Force
                Write-Host "Moved '$($item.Name)' from [$stage] -> [$TargetStage]" -ForegroundColor Green
            }
        }
    }
}

if (-not $found) {
    Write-Warning "No card matching pattern '$CardPattern' found in any stage."
}
