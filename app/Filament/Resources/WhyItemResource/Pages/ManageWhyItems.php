<?php

namespace App\Filament\Resources\WhyItemResource\Pages;

use App\Filament\Resources\WhyItemResource;
use Filament\Actions;
use Filament\Resources\Pages\ManageRecords;

class ManageWhyItems extends ManageRecords
{
    protected static string $resource = WhyItemResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
