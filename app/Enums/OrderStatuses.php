<?php

namespace App\Enums;

enum OrderStatuses: string
{
    case NEW = 'NEW';
    case COMPLETED = 'COMPLETED';

    public function label(): string {
        return static::getLabel($this);
    }

    public static function getLabel(self $value): string {
        return match ($value) {
            self::NEW => 'Новый',
            self::COMPLETED => 'Выполнен',
        };
    }
}
