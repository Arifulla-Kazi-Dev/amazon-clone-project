import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'product/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: () => Promise.resolve([{ id: '1' }, { id: '2' }, { id: '3' }]), // Ensure it's a Promise
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
