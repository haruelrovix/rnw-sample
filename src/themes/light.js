/**
 * Used to control the width of the time column in LogList and all the LogEntryXXXX files
 * @type {number}
 */
export const palette = {
    screen: '#F6F6F6',
    white: '#FFFFFF',
    smokeWhite: '#D4D4D4',
    lightTone: '#454545',
    midTone: '#333333',
    lightBlue: '#0796ED',
    blue: '#157BB9',
    midBlue: '#064F7B',
    darkBlue: '#023D61',
    darkerBlue: '#013352',
    orange: '#FC9C00',
    error: '#F94646',
};

// @TODO Unit test to make sure this theme matches the proptype definition
export const theme = {
    /* SCREENS */
    text: {
        color: palette.midTone,
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
        backgroundColor: palette.white,
        borderRadius: 3,
        padding: 5
    },
    addLogButtonColor: palette.orange,
    inputUnderlineColor: palette.smokeWhite,
    inputUnderlineColorSelected: palette.blue,
    selectList: {
        backgroundColor: palette.screen
    },
    selectedItemTextColor: {
        color: palette.blue
    },

    /* TIMELINE */
    timelineTime: {
        opacity: 0.63
    },
    timelineIssueId: {
        color: palette.lightTone
    },
    timelineTitle: {
        opacity: 0.63
    },
    timelineBarVertical: {
        borderLeftWidth: 1,
        borderColor: palette.smokeWhite
    },
    timelineBarHorizontal: {
        borderWidthTop: 1,
        borderColor: palette.white
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
        color: palette.lightBlue
    },
    dialogButtonText: {
        color: palette.lightBlue
    },

    /* FOOTER */
    timerBar: {
        backgroundColor: palette.white
    },
    timerBarText: {
        opacity: 0.63
    },
    timerBarButton: {
        backgroundColor: 'transparent'
    },
    timerBarButtonIconColor: palette.lightTone,
    timerBarButtonIconDisabledColor: palette.screen,

    /* SIDEBAR */
    sidebar: {
        backgroundColor: palette.darkBlue
    },
    sidebarText: {
        color: palette.white
    },
    sidebarHeader: {
        backgroundColor: palette.darkerBlue
    },
    sidebarIconsColor: palette.white,
    sidebarIcon: {
        opacity: 0.6
    },
    sidebarIconActive: {
        opacity: 1
    },
    sidebarActiveScreen: {
        borderLeftWidth: 3,
        borderColor: palette.orange,
        backgroundColor: palette.midBlue
    },
    sidebarHR: {
        borderTopWidth: 1,
        borderColor: palette.smokeWhite
    },
    sidebarSummaryDateText: {
        color: palette.smokeWhite
    }
};
