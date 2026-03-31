<?php

namespace App\Filament\Resources\EcommerceSettingResource\Pages;

use App\Filament\Resources\EcommerceSettingResource;
use Filament\Actions;
use Filament\Resources\Pages\ManageRecords;

class ManageEcommerceSettings extends ManageRecords
{
    protected static string $resource = EcommerceSettingResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
