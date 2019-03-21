export const MIN_TASK_TIME_SECONDS = 60;

export const logTypes = {
    task: 'Task',
    break: 'Break'
};

export const breakTypes = {
    standard: {
        id: 'standard',
        title: 'Break'
    },
    lunch: {
        id: 'lunch',
        title: 'Lunch'
    },
    appointment: {
        id: 'appointment',
        title: 'Appointment'
    },
    errands: {
        id: 'errands',
        title: 'Errands'
    },
    sick: {
        id: 'sick',
        title: 'Sick'
    },
    vacation: {
        id: 'vacation',
        title: 'Vacation'
    },
    eod: {
        id: 'eod',
        title: 'End of Work Day'
    }
};

export const longBreakTypes = [
    breakTypes.vacation.id,
    breakTypes.eod.id
];

export const taskTypes = {
    admin: 'Admin',
    discussion: 'Discussion',
    development: 'Development'
};

export const workLogTypes = {
    discussion: 'Discussion',
    development: 'Development',
    research: 'Research'
};

export const stateTypes = {
    inProgress: 'In Progress',
    complete: 'Complete'
};

export const modalTypes = {
    log: 'Log',
    integration: 'Integration'
};

export const integrations = {
    youtrack: 'YouTrack'
};

/* eslint-disable global-require */
export const icons = {
    lunch: require('./assets/icons/lunch.png'),
    appointment: require('./assets/icons/appointment.png'),
    errands: require('./assets/icons/errands.png'),
    sick: require('./assets/icons/sick.png'),
    vacation: require('./assets/icons/vacation.png'),
    eod: require('./assets/icons/eod.png')
};
/* eslint-enable global-require */
