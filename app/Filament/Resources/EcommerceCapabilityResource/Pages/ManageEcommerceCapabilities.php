<?php

namespace App\Filament\Resources\EcommerceCapabilityResource\Pages;

use App\Filament\Resources\EcommerceCapabilityResource;
use Filament\Actions;
use Filament\Resources\Pages\ManageRecords;

class ManageEcommerceCapabilities extends ManageRecords
{
    protected static string $resource = EcommerceCapabilityResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
