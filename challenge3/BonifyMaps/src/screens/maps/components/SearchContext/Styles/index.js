import { GRAY_COLOR, DARKER_GRAY } from 'src/Constants'

export const SearchContainerStyle = {
    height: '5%',
    position: 'absolute',
    width: '90%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignSelf: 'center',
    top: 70
}

export const TextInputStyle = {
    flex: 1,
    flexBasis: '90%',
    borderRightWidth: 1,
    borderRightColor: GRAY_COLOR,
    paddingLeft: 10, 
    color: DARKER_GRAY
}

export const IconContainerStyle = {
    flex: 1,
    flexBasis: '10%',
    justifyContent: 'center',
    alignItems: 'center'
}
