export const SCHEMA = {
    name: {
        notEmpty: true,
        isAlpha: true
    },
    reps: {
        isInt: {
            options: { min: 1 },
        },
    },
    weight: {
        isInt: {
            options: { min: 1 },
        },
    },
    unit: {
        isIn: {
            options: [['kgs', 'lbs']]
        },
    },
    date: {
        notEmpty: true,
    }
}

export function validDate(date) {
    // Check that date has correct format
    const format = /^\d\d-\d\d-\d\d$/;
    return format.test(date);
}