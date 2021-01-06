<template>
    <section>
        <h2>My Friends</h2>
        <ul>
            <li></li>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '123 456 7890',
                    email: 'manuel@localhost.com',
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '987 654 3210',
                    email: 'julie@localhost.com',
                },
            ],
        };
    },
};
</script>
