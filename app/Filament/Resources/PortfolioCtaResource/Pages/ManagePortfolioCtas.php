<?php

namespace App\Filament\Resources\PortfolioCtaResource\Pages;

use App\Filament\Resources\PortfolioCtaResource;
use Filament\Actions;
use Filament\Resources\Pages\ManageRecords;

class ManagePortfolioCtas extends ManageRecords
{
    protected static string $resource = PortfolioCtaResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
