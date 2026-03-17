<?php

namespace App\Filament\Resources\ProcessStepResource\Pages;

use App\Filament\Resources\ProcessStepResource;
use Filament\Actions;
use Filament\Resources\Pages\ManageRecords;

class ManageProcessSteps extends ManageRecords
{
    protected static string $resource = ProcessStepResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
