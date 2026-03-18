<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PresenceSettingResource\Pages;
use App\Models\PresenceSetting;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class PresenceSettingResource extends Resource
{
    protected static ?string $model = PresenceSetting::class;

    protected static ?string $navigationIcon = 'heroicon-o-cog-6-tooth';

    protected static ?string $navigationGroup = 'Landing Page';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('label')
                    ->required()
                    ->maxLength(255)
                    ->default('Our Presence'),
                Forms\Components\TextInput::make('heading_count')
                    ->required()
                    ->maxLength(255)
                    ->default('6 Markets'),
                Forms\Components\TextInput::make('heading_standard')
                    ->required()
                    ->maxLength(255)
                    ->default('One standard.'),
                Forms\Components\Textarea::make('subtitle')
                    ->columnSpanFull(),
                Forms\Components\Toggle::make('is_active')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('label')
                    ->searchable(),
                Tables\Columns\TextColumn::make('heading_count')
                    ->searchable(),
                Tables\Columns\TextColumn::make('heading_standard')
                    ->searchable(),
                Tables\Columns\IconColumn::make('is_active')
                    ->boolean(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPresenceSettings::route('/'),
            'create' => Pages\CreatePresenceSetting::route('/create'),
            'edit' => Pages\EditPresenceSetting::route('/{record}/edit'),
        ];
    }
}
