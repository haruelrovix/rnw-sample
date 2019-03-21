/**
 * Used to control the width of the time column in LogList and all the LogEntryXXXX files
 * @type {number}
 */
export const palette = {
    lightTone: '#454545',
    midTone: '#333333',
    darkTone: '#2C2C2C',
    darkerTone: '#272727',
    screen: '#222222',
    white: '#FFFFFF',
    smokeWhite: '#D2D2D2',
    blue: '#157BB9',
    orange: '#FC9C00',
    error: '#F94646'
};

export const theme = {
    /* SCREENS */
    text: {
        color: palette.white,
    },
    settingsLabel: {
        color: palette.blue
    },
    header: {
        backgroundColor: palette.blue
    },
    background: {
        backgroundColor: palette.screen
    },
    detailBubble: {
        backgroundColor: palette.midTone,
        borderRadius: 3,
        padding: 5
    },
    addLogButtonColor: palette.orange,
    inputUnderlineColor: palette.smokeWhite,
    inputUnderlineColorSelected: palette.blue,
    selectList: {
        backgroundColor: palette.darkTone
    },
    selectedItemTextColor: {
        color: palette.blue
    },

    /* TIMELINE */
    timelineTime: {
        opacity: 0.63
    },
    timelineIssueId: {
    },
    timelineTitle: {
        opacity: 0.63
    },
    timelineBarVertical: {
        borderLeftWidth: 1,
        borderColor: palette.lightTone
    },
    timelineBarHorizontal: {
        borderWidthTop: 1,
        borderColor: palette.darkTone
    },

    /* MODAL DIALOG */
    dialog: {
        backgroundColor: palette.screen
    },
    dialogLabel: {
        opacity: 0.45
    },
    dialogLabelActive: {
        opacity: 1,
        color: palette.blue
    },
    dialogButtonText: {
        color: palette.blue
    },

    /* FOOTER */
    timerBar: {
        backgroundColor: palette.midTone
    },
    timerBarText: {
        opacity: 0.63
    },
    timerBarButton: {
        backgroundColor: 'transparent'
    },
    timerBarButtonIconColor: palette.smokeWhite,
    timerBarButtonIconDisabledColor: palette.screen,

    /* SIDEBAR */
    sidebar: {
        backgroundColor: palette.midTone
    },
    sidebarText: {
        color: palette.white
    },
    sidebarHeader: {
        backgroundColor: palette.darkerTone
    },
    sidebarIconsColor: palette.white,
    sidebarIcon: {
        opacity: 0.63
    },
    sidebarIconActive: {
        opacity: 1
    },
    sidebarActiveScreen: {
        borderLeftWidth: 3,
        borderColor: palette.orange,
        backgroundColor: palette.lightTone,
    },
    sidebarHR: {
        borderTopWidth: 1,
        borderColor: palette.smokeWhite
    },
    sidebarSummaryDateText: {
        color: palette.smokeWhite
    }
};
