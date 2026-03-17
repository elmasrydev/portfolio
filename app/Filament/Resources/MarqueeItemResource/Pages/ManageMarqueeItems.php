<?php

namespace App\Filament\Resources\MarqueeItemResource\Pages;

use App\Filament\Resources\MarqueeItemResource;
use Filament\Actions;
use Filament\Resources\Pages\ManageRecords;

class ManageMarqueeItems extends ManageRecords
{
    protected static string $resource = MarqueeItemResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
