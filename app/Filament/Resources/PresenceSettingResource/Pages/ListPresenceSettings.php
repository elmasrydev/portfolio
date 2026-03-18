<?php

namespace App\Filament\Resources\PresenceSettingResource\Pages;

use App\Filament\Resources\PresenceSettingResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListPresenceSettings extends ListRecords
{
    protected static string $resource = PresenceSettingResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
