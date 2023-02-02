import {StyleSheet} from 'react-native';
import STYLES from '../../constants/Styles';

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: STYLES.$PADDINGS.LARGE,
    alignItems: 'center',
    backgroundColor: STYLES.$COLORS.TERTIARY,
  },
  avatar: {
    width: STYLES.$AVATAR.WIDTH,
    height: STYLES.$AVATAR.HEIGHT,
    borderRadius: STYLES.$AVATAR.BORDER_RADIUS,
    marginRight: STYLES.$MARGINS.SMALL,
    resizeMode: 'cover',
  },
  infoParent: {flex: 1},
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: {
    fontSize: STYLES.$FONT_SIZES.XL,
    fontFamily: STYLES.$FONT_TYPES.BOLD,
    color: STYLES.$COLORS.PRIMARY,
    width: 160,
  },
  lastMessage: {
    color: STYLES.$COLORS.MSG,
    fontSize: STYLES.$FONT_SIZES.MEDIUM,
    fontFamily: STYLES.$FONT_TYPES.LIGHT,
  },
  joinBtnContainer: {
    backgroundColor: STYLES.$COLORS.SECONDARY,
    borderRadius: 10,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  joinedBtnContainer: {
    backgroundColor: STYLES.$COLORS.JOINED_BTN,
    borderRadius: 10,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  join: {
    color: STYLES.$COLORS.TERTIARY,
    fontSize: STYLES.$FONT_SIZES.LARGE,
    fontFamily: STYLES.$FONT_TYPES.SEMI_BOLD,
  },
  joined: {
    color: STYLES.$COLORS.SECONDARY,
    fontSize: STYLES.$FONT_SIZES.LARGE,
    fontFamily: STYLES.$FONT_TYPES.SEMI_BOLD,
  },
  icon: {
    width: 40,
    height: 25,
    resizeMode: 'contain',
    borderRadius: STYLES.$AVATAR.BORDER_RADIUS,
    // marginRight: STYLES.$MARGINS.LARGE,
    // marginLeft: STYLES.$MARGINS.SMALL,
  },
  chatroomInfo: {
    fontSize: STYLES.$FONT_SIZES.LARGE,
    marginTop: STYLES.$MARGINS.SMALL,
    fontFamily: STYLES.$FONT_TYPES.LIGHT,
    color: STYLES.$COLORS.MSG,
    // fontWeight:'500',
    // marginRight:STYLES.$MARGINS.SMALL,
    width: 290,
  },
  pinnedIconParent: {
    backgroundColor: STYLES.$COLORS.SECONDARY,
    height: 20,
    width: 20,
    position: 'absolute',
    borderRadius: 50,
    right: 10,
    bottom: 0,
  },
  pinnedIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  newBadge: {
    position: 'absolute',
    bottom: -5,
    left: 10,
    backgroundColor: 'red',
    padding: 2,
    borderRadius: 3
  },
  newBadgeText: {
    fontSize: STYLES.$FONT_SIZES.SMALL,
    fontFamily: STYLES.$FONT_TYPES.LIGHT,
    color: STYLES.$COLORS.TERTIARY,
  },
});
