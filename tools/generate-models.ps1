$ErrorActionPreference = 'Stop'
Add-Type -Path (Join-Path $PSScriptRoot 'DishModelGenerator.cs')
[DishModelGenerator]::Generate((Join-Path $PSScriptRoot '..\models'))
Write-Output 'Generated procedural food and beverage models in GLB and USDZ formats.'
