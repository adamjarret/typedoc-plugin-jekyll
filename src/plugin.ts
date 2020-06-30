import { existsSync, writeFileSync } from 'fs';
import { resolve as resolvePath } from 'path';
import { Component, RendererComponent } from 'typedoc/dist/lib/output/components';
import { RendererEvent } from 'typedoc/dist/lib/output/events';

@Component({ name: 'jekyll' })
export class JekyllPlugin extends RendererComponent {
  initialize(): void {
    this.listenTo(this.owner, {
      [RendererEvent.END]: this.onRendererEnd
    });
  }

  private onRendererEnd(event: RendererEvent) {
    const nojekyll = resolvePath(event.outputDirectory, '.nojekyll');

    if (existsSync(event.outputDirectory) && !existsSync(nojekyll)) {
      writeFileSync(nojekyll, '');
      console.log(`Wrote ${nojekyll}`);
    }
  }
}
