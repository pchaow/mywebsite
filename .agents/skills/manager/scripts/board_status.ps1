<#
.SYNOPSIS
  Helper script to display the current status of the Kanban board across all stage folders.
#>

$stages = @("0-backlog", "1-todo", "2-doing", "3-test", "4-done", "5-reject", "6-archived")

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "         KANBAN BOARD STATUS            " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

foreach ($stage in $stages) {
    if (Test-Path $stage) {
        $files = Get-ChildItem -Path $stage -Filter "*.md" | Where-Object { $_.Name -ne "README.md" -and $_.Name -ne "00-backlog-overview.md" }
        Write-Host "`n📁 [$stage] ($($files.Count) items)" -ForegroundColor Yellow
        if ($files.Count -eq 0) {
            Write-Host "   (empty)" -ForegroundColor DarkGray
        } else {
            foreach ($f in $files) {
                Write-Host "   - $($f.Name)" -ForegroundColor White
            }
        }
    }
}
Write-Host "`n========================================" -ForegroundColor Cyan
