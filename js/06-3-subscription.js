// Напишите срипт проверки подписки пользователя при доступе к контенту
// * - Есть три типа подписки: free, pro и vip.
// - получить доступ могут толькоо пользователи pro и vip

const sub = 'free';

const canAccessContent = sub ==='pro' || sub ==='vip';
console.log ('Есть доступ к контенту?', canAccessContent);