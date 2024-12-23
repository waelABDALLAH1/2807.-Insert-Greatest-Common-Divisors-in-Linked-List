var insertGreatestCommonDivisors = function(head) {
    // Efficient iterative GCD function
    const gcd = (a, b) => {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    };

    let current = head;

    while (current !== null && current.next !== null) {
        // Compute GCD of current and next node values
        const gcdValue = gcd(current.val, current.next.val);

        // Create a new node with the GCD value
        const newNode = new ListNode(gcdValue);

        // Insert the new node between current and next
        newNode.next = current.next;
        current.next = newNode;

        // Move to the next pair of nodes
        current = newNode.next;
    }

    return head;
};
