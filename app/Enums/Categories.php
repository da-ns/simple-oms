<?php

namespace App\Enums;

enum Categories: string
{
    case SOFT = 'SOFT';
    case BRITTLE = 'BRITTLE';
    case HEAVY = 'HEAVY';

    public function label(): string {
        return static::getLabel($this);
    }

    public function value(): string {
        return static::getValue($this);
    }

    public static function getLabel(self $value): string {
        return match ($value) {
            Discounts::SOFT => 'Мягкий',
            Discounts::BRITTLE => 'Хрупкий',
            Discounts::HEAVY => 'Тяжелый',
        };
    }

    public static function labels(): array
    {
        $labels = array_map(fn($case) => $case->label(), self::cases());
        $names = array_column(self::cases(), 'name');
        return array_combine($names, $labels);
    }
}
