export function iconHashToNumber(hash: string) {
    let animated = false;

    if (hash.startsWith('a_')) {
        animated = true;
        hash = hash.substring(2);
    }

    return {
        animated,
        hash,
    };
}

export function iconBigintToHash(icon: bigint, animated = true) {
    const hash = icon.toString(16).padStart(32, '0');
    return `${animated ? 'a_' : ''}${hash}`;
}
