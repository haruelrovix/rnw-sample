import PropTypes from 'prop-types-defined';
import { ViewPropTypes } from 'react-native';
import moment from 'moment-timezone';

export const funcPropType = PropTypes.func;
export const boolPropType = PropTypes.bool;
export const numPropType = PropTypes.number;
export const stringPropType = PropTypes.string;
export const objectPropType = PropTypes.object; // AVOID USING
export const viewPropsType = ViewPropTypes;

export const stringArrayPropType = PropTypes.arrayOf(stringPropType);
export const arrayOfObjectsPropType = PropTypes.arrayOf(PropTypes.object);
export const numberArrayPropType = PropTypes.arrayOf(numPropType);
export const momentPropType = PropTypes.instanceOf(moment);
export const arrayObjectsOrObject = PropTypes.oneOfType([arrayOfObjectsPropType, objectPropType]);

export const componentPropType = PropTypes.node;

export const stringOrNumPropType = PropTypes.oneOfType([stringPropType, numPropType]);

export const selectOptionsPropTypes = PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.oneOfType([stringPropType, numPropType]).isRequired,
    label: stringPropType.isRequired
}));

export const navigationPropType = PropTypes.shape({
    navigate: funcPropType,
    openDrawer: funcPropType
});

export const inputContextPropType = PropTypes.shape({
    onFocus: funcPropType.isRequired,
    onBlur: funcPropType.isRequired
});

export const userPropType = PropTypes.shape({
    name: stringPropType,
    email: stringPropType,
    timezone: stringPropType,
    integration: stringPropType,
    theme: stringPropType,
    compactMode: boolPropType
});

export const logPropType = PropTypes.shape({
    logTimestamp: numPropType.isRequired,
    logDurationSeconds: numPropType.isRequired,
    logType: stringPropType.isRequired,
    taskId: stringPropType.isRequired,
    taskIdHuman: stringPropType.isRequired,
    taskTitle: stringPropType,
    taskDescription: stringPropType,
    taskType: stringPropType,
    workLogComment: stringPropType,
    workLogType: stringPropType,
    committed: boolPropType
});

export const logListPropType = PropTypes.arrayOf(logPropType);

export const themePropType = PropTypes.shape({
    /* SCREENS */
    text: PropTypes.object,
    settingsLabel: PropTypes.object,
    header: PropTypes.object,
    background: PropTypes.object,
    detailBubble: PropTypes.object,
    addLogButtonColor: stringPropType,
    inputUnderlineColor: stringPropType,

    /* TIMELINE */
    timelineTime: PropTypes.object,
    timelineIssueId: PropTypes.object,
    timelineTitle: PropTypes.object,
    timelineBarVertical: PropTypes.object,
    timelineBarHorizontal: PropTypes.object,

    /* MODAL DIALOG */
    dialog: PropTypes.object,
    dialogLabel: PropTypes.object,
    dialogLabelActive: PropTypes.object,
    dialogButtonText: PropTypes.object,

    /* FOOTER */
    timerBar: PropTypes.object,
    timerBarText: PropTypes.object,
    timerBarButton: PropTypes.object,
    timerBarButtonIconColor: stringPropType,
    timerBarButtonIconDisabledColor: stringPropType,

    /* SIDEBAR */
    sidebar: PropTypes.object,
    sidebarText: PropTypes.object,
    sidebarHeader: PropTypes.object,
    sidebarIconsColor: stringPropType,
    sidebarIcon: PropTypes.object,
    sidebarIconActive: PropTypes.object,
    sidebarActiveScreen: PropTypes.object,
});

export const logFormsPropTypes = {
    theme: themePropType.isRequired,
    setModal: funcPropType.isRequired,

    logTime: stringPropType.isDefined,
    logTimestamp: numPropType.isDefined,
    logDurationSeconds: numPropType.isDefined,
    logType: stringPropType.isDefined,

    taskId: stringPropType.isDefined,
    taskIdHuman: stringPropType.isDefined,
    taskTitle: stringPropType,
    taskDescription: stringPropType,
    taskState: stringPropType,
    taskType: stringPropType,

    workLogComment: stringPropType.isDefined,
    workLogType: stringPropType.isDefined,

    taskTypeOptions: selectOptionsPropTypes.isRequired,
    taskStateOptions: selectOptionsPropTypes.isRequired,
    taskIdOptions: selectOptionsPropTypes.isDefined,
    taskTitleOptions: selectOptionsPropTypes.isDefined,
    workLogTypeOptions: selectOptionsPropTypes.isRequired,

    updateLogTime: funcPropType.isRequired,
    updateLogDurationSeconds: funcPropType.isRequired,
    updateLogType: funcPropType.isRequired,

    updateTaskId: funcPropType.isRequired,
    updateTaskTitle: funcPropType.isRequired,
    updateTaskDescription: funcPropType.isRequired,
    updateTaskState: funcPropType.isRequired,
    updateTaskType: funcPropType.isRequired,

    updateWorkLogComment: funcPropType.isRequired,
    updateWorkLogType: funcPropType.isRequired,

    submitCreateLogEntry: funcPropType.isRequired,
    submitUpdateLogEntry: funcPropType.isRequired
};
