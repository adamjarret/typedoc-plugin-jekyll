import { JekyllPlugin } from './plugin';
import { PluginHost } from 'typedoc/dist/lib/utils';

export function load(pluginHost: PluginHost): void {
  const renderer = pluginHost.owner.renderer;

  renderer.addComponent('jekyll', new JekyllPlugin(renderer));
}
