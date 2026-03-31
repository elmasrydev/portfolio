<?php

namespace App\Filament\Resources;

use App\Filament\Resources\EcommerceCapabilityResource\Pages;
use App\Filament\Resources\EcommerceCapabilityResource\RelationManagers;
use App\Models\EcommerceCapability;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class EcommerceCapabilityResource extends Resource
{
    protected static ?string $model = EcommerceCapability::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('num')->label('Number (e.0. 01)'),
                Forms\Components\TextInput::make('title')->required(),
                Forms\Components\Textarea::make('description')->rows(3)->columnSpanFull(),
                Forms\Components\Textarea::make('icon_svg')->label('Icon SVG code')->rows(5)->columnSpanFull(),
                Forms\Components\TextInput::make('sort_order')->numeric()->default(0),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('num'),
                Tables\Columns\TextColumn::make('title')->searchable(),
                Tables\Columns\TextColumn::make('sort_order')->sortable(),
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
            'index' => Pages\ManageEcommerceCapabilities::route('/'),
        ];
    }
}
