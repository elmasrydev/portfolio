<?php

namespace App\Filament\Resources;

use App\Filament\Resources\HeroSettingResource\Pages;
use App\Models\HeroSetting;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class HeroSettingResource extends Resource
{
    protected static ?string $model = HeroSetting::class;

    protected static ?string $navigationIcon = 'heroicon-o-home';

    protected static ?string $navigationGroup = 'Landing Page';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Textarea::make('title')
                    ->required()
                    ->helperText('Use <span class="accent">...</span> for highlighted words.'),
                Forms\Components\Textarea::make('subtitle'),
                Forms\Components\TextInput::make('cta_text'),
                Forms\Components\TextInput::make('cta_url'),
                Forms\Components\TextInput::make('secondary_cta_text'),
                Forms\Components\TextInput::make('secondary_cta_url'),
                Forms\Components\Toggle::make('is_active')->default(true),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')->limit(50),
                Tables\Columns\ToggleColumn::make('is_active'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ManageHeroSettings::route('/'),
        ];
    }
}
