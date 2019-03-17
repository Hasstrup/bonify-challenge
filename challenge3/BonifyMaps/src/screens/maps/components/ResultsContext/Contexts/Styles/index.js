import { BLACK, GRAY_COLOR, DARKER_GRAY } from 'src/Constants'


export const VideoPreviewStyle = {
  topContainer: {
    flex: 1,
    flexDirection: "row",

  },
  textContainer: {
      flex: 1,
      flexBasis: '70%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRightWidth: 1,
      borderRightColor: GRAY_COLOR
  },
  buttonContainer: {
    flex: 1,
    flexBasis: '25%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentTitle: {
      fontSize: 19,
      fontWeight: '600',
      color: BLACK,
      marginBottom: 10
  }, 
  contentDescription: {
     fontSize: 17,
     color: DARKER_GRAY
  }

};
