import { IconCamera, IconCode } from '@tabler/icons-react';
import { WORK_TAGS } from './tags';
import type { WorkTag } from './tags';

export const TAG_ICONS: Record<WorkTag, React.ReactNode> = {
  [WORK_TAGS.PHOTOGRAPHY]: <IconCamera size={14} />,
  [WORK_TAGS.WEB_DEVELOPMENT]: <IconCode size={14} />,
};

export function getTagIcon(tag: string): React.ReactNode | undefined {
  return TAG_ICONS[tag as WorkTag];
}
