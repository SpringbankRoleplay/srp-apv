import type { ComponentPropsWithoutRef, ReactNode } from 'react';

const straffen: Record<string, string> = {
  '1': 'Een waarschuwing',
  '2': 'Een ban van 1 dag + 20 uur taakstraf',
  '3': 'Een ban van 2 dagen + 25 uur taakstraf',
  '4': 'Een ban van 3 dagen + 30 uur taakstraf',
  '5': 'Een ban van 1 week + 50 uur taakstraf',
  '6': 'Een ban van 1 maand',
  '7': 'Permanente ban',
  '8': 'Account wipe',
};

function getText(children: ReactNode): string | undefined {
  if (typeof children === 'string') return children;
  if (Array.isArray(children) && children.every((child) => typeof child === 'string')) {
    return children.join('');
  }
}

export function StrafCategorie({ children, ...props }: ComponentPropsWithoutRef<'strong'>) {
  const text = getText(children);
  const match = text?.match(/^Straf ⇨ Categorie ([1-8])(.*)$/);

  if (!match) return <strong {...props}>{children}</strong>;

  const [, categorie, toevoeging] = match;

  return (
    <strong {...props}>
      Straf ⇨{' '}
      <span
        className="straf-categorie"
        tabIndex={0}
        aria-label={`Categorie ${categorie}: ${straffen[categorie]}`}
        data-tooltip={straffen[categorie]}
      >
        Categorie {categorie}
      </span>
      {toevoeging}
    </strong>
  );
}
