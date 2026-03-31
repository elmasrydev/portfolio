<?php

namespace App\Filament\Resources;

use App\Filament\Resources\EcommerceSettingResource\Pages;
use App\Filament\Resources\EcommerceSettingResource\RelationManagers;
use App\Models\EcommerceSetting;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class EcommerceSettingResource extends Resource
{
    protected static ?string $model = EcommerceSetting::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Tabs::make('Tabs')
                    ->tabs([
                        Forms\Components\Tabs\Tab::make('General')
                            ->schema([
                                Forms\Components\TextInput::make('label')->required(),
                                Forms\Components\TextInput::make('title')->required(),
                                Forms\Components\Textarea::make('description')->rows(3),
                                Forms\Components\TagsInput::make('verticals')
                                    ->placeholder('Add a vertical (e.g. Fashion & Apparel)')
                                    ->columnSpanFull(),
                            ]),
                        Forms\Components\Tabs\Tab::make('Partner Banner')
                            ->schema([
                                Forms\Components\TextInput::make('partner_name')->required(),
                                Forms\Components\TextInput::make('partner_sub'),
                            ]),
                        Forms\Components\Tabs\Tab::make('Statistics')
                            ->schema([
                                Forms\Components\Grid::make(3)
                                    ->schema([
                                        Forms\Components\Fieldset::make('Stat 1')
                                            ->schema([
                                                Forms\Components\TextInput::make('stat1_n')->label('Number (e.g. 20+)'),
                                                Forms\Components\TextInput::make('stat1_l')->label('Label (e.g. Stores Built)'),
                                            ]),
                                        Forms\Components\Fieldset::make('Stat 2')
                                            ->schema([
                                                Forms\Components\TextInput::make('stat2_n')->label('Number'),
                                                Forms\Components\TextInput::make('stat2_l')->label('Label'),
                                            ]),
                                        Forms\Components\Fieldset::make('Stat 3')
                                            ->schema([
                                                Forms\Components\TextInput::make('stat3_n')->label('Number'),
                                                Forms\Components\TextInput::make('stat3_l')->label('Label'),
                                            ]),
                                    ]),
                            ]),
                    ])->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')->searchable(),
                Tables\Columns\TextColumn::make('label'),
                Tables\Columns\TextColumn::make('partner_name'),
                Tables\Columns\TextColumn::make('updated_at')->dateTime()->sortable(),
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
            'index' => Pages\ManageEcommerceSettings::route('/'),
        ];
    }
}
