<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PortfolioCtaResource\Pages;
use App\Models\PortfolioCta;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class PortfolioCtaResource extends Resource
{
    protected static ?string $model = PortfolioCta::class;

    protected static ?string $navigationIcon = 'heroicon-o-home';

    protected static ?string $navigationGroup = 'Landing Page';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('label'),
                Forms\Components\TextInput::make('heading'),
                Forms\Components\Textarea::make('description'),
                Forms\Components\TextInput::make('button_text'),
                Forms\Components\SpatieMediaLibraryFileUpload::make('portfolio_pdf')->collection('portfolio_pdf')->label('Portfolio PDF'),
                Forms\Components\Toggle::make('is_active')->default(true),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('label'),
                Tables\Columns\TextColumn::make('heading'),
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
            'index' => Pages\ManagePortfolioCtas::route('/'),
        ];
    }
}
