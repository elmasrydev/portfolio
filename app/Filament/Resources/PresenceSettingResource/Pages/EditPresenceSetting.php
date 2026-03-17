<?php

namespace App\Filament\Resources\PresenceSettingResource\Pages;

use App\Filament\Resources\PresenceSettingResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditPresenceSetting extends EditRecord
{
    protected static string $resource = PresenceSettingResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
