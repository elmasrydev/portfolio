<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PresenceLocationResource\Pages;
use App\Models\PresenceLocation;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class PresenceLocationResource extends Resource
{
    protected static ?string $model = PresenceLocation::class;

    protected static ?string $navigationIcon = 'heroicon-o-globe-alt';

    protected static ?string $navigationGroup = 'Landing Page';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('code')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('num_id')
                    ->maxLength(255),
                Forms\Components\TextInput::make('lng')
                    ->required()
                    ->numeric(),
                Forms\Components\TextInput::make('lat')
                    ->required()
                    ->numeric(),
                Forms\Components\TextInput::make('pos')
                    ->required()
                    ->maxLength(255)
                    ->default('center'),
                Forms\Components\TextInput::make('role')
                    ->maxLength(255),
                Forms\Components\Textarea::make('description')
                    ->columnSpanFull(),
                Forms\Components\TextInput::make('sort_order')
                    ->required()
                    ->numeric()
                    ->default(0),
                Forms\Components\SpatieMediaLibraryFileUpload::make('flag')
                    ->collection('flag'),
                Forms\Components\Toggle::make('is_active')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('code')
                    ->searchable(),
                Tables\Columns\TextColumn::make('num_id')
                    ->searchable(),
                Tables\Columns\TextColumn::make('lng')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('lat')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('pos')
                    ->searchable(),
                Tables\Columns\TextColumn::make('role')
                    ->searchable(),
                Tables\Columns\TextColumn::make('sort_order')
                    ->numeric()
                    ->sortable(),
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
            ])
            ->reorderable('sort_order');
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
            'index' => Pages\ListPresenceLocations::route('/'),
            'create' => Pages\CreatePresenceLocation::route('/create'),
            'edit' => Pages\EditPresenceLocation::route('/{record}/edit'),
        ];
    }
}
