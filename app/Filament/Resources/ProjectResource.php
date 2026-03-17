<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProjectResource\Pages;
use App\Models\Project;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class ProjectResource extends Resource
{
    protected static ?string $model = Project::class;

    protected static ?string $navigationIcon = 'heroicon-o-home';

    protected static ?string $navigationGroup = 'Landing Page';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('category')->label('Category (e.g. Featured · Booking Platform)'),
                Forms\Components\TextInput::make('title')->required(),
                Forms\Components\Textarea::make('description'),
                Forms\Components\Toggle::make('is_featured')->label('Is Featured Project?'),
                Forms\Components\Textarea::make('icon_svg')->label('Icon SVG (optional)'),
                Forms\Components\TextInput::make('sort_order')->numeric()->default(0),
                Forms\Components\SpatieMediaLibraryFileUpload::make('image')
                    ->collection('project_image'),
                Forms\Components\Toggle::make('is_active')->default(true),

                Forms\Components\Section::make('Tech Tags')
                    ->schema([
                        Forms\Components\Repeater::make('tags')
                            ->relationship('tags')
                            ->schema([
                                Forms\Components\TextInput::make('name')->required(),
                                Forms\Components\TextInput::make('sort_order')->numeric()->default(0),
                            ])
                            ->orderColumn('sort_order')
                            ->columns(2),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title'),
                Tables\Columns\BooleanColumn::make('is_featured'),
                Tables\Columns\TextColumn::make('sort_order')->sortable(),
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
            'index' => Pages\ListProjects::route('/'),
            'create' => Pages\CreateProject::route('/create'),
            'edit' => Pages\EditProject::route('/{record}/edit'),
        ];
    }
}
