import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { PopupPageProps as ExternalProps } from '@fluentui/react-examples/lib/react/Popup/Popup.doc';
import { ISideRailLink } from '@fluentui/react-docsite-components/lib/index2';

const related: ISideRailLink[] = [];

export const PopupPageProps: TFabricPlatformPageProps = {
  web: {
    ...(ExternalProps as any),
    related,
  },
};
