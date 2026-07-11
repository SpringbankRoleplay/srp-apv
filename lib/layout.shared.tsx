import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, discordUrl, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="inline-flex items-center gap-2">
          <img src="/img/logo.png" alt="" width={24} height={24} className="rounded" />
          <span className="font-semibold">{appName}</span>
        </span>
      ),
    },
    githubUrl: discordUrl,
  };
}
