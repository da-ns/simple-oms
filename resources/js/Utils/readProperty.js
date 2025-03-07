const read = (object, props) => {
    if (props.length === 0) { // если в массиве свойств нет элементов,
        // то возвращаем переданный объект и выходим из рекурсии
        return object;
    }

    object = object[props[props.length - 1]]; // получаем значение по свойству и переписываем текущий объект
    props.pop(); // убираем прочитанное свойство из списка
    return read(object, props);  // повторяем процедуру с оставшимися свойствами
};

const readProperty = (object, propertyString) => {
    const properties = propertyString.split('.'); // Массив сложенных свойств
    properties.reverse(); // Меняем порядок на обратный, чтобы пользоваться функцией pop
    return read(object, properties); // Получаем значение указанного свойства
};

export default readProperty;
