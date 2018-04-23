export const crashReporter = store => next => action => {
    try {
        return next(action);
    } catch (err) {
        console.log('Caught an Exception :', err, {extra: action, state: store.getState()});
        throw err;
    }
};