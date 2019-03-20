import { GRAY_COLOR, BLACK } from 'src/Constants'

export const SearchContainerStyle = {
    height: 45,
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
    color: BLACK
}

export const IconContainerStyle = {
    flex: 1,
    flexBasis: '10%',
    justifyContent: 'center',
    alignItems: 'center'
}
