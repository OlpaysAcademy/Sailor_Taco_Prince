import R from 'ramda';

const getIngredientId = (ingredientName, ingredients) => {
    return R.pipe(
        R.values,
        R.find(R.propEq('name', ingredientName)),
        R.ifElse(
            R.isNil,
            R.identity,
            R.prop('id')
        )
    )(ingredients);
}

export { getIngredientId }