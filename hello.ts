type User = {
    username: string;
}

export function ensureType<T>(value: T): T {
    return value;
}

const user = {
    username: 'user',
    other: 'field'
} as User

const user2 = <User>{
    username: 'user',
    other: 'field'
}

const user3 = ensureType<User>({
    username: 'user',
    other: 'field'
});

