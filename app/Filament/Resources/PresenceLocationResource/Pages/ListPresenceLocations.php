<?php

namespace App\Filament\Resources\PresenceLocationResource\Pages;

use App\Filament\Resources\PresenceLocationResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListPresenceLocations extends ListRecords
{
    protected static string $resource = PresenceLocationResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
