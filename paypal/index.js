paypal.Buttons({
    style: {
        color: 'blue',
        shape: 'pill',
    },

    // Set up the transaction
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '88.44'
                }
            }]
        });
    },

    // Finalize the transaction
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            // Show a success message to the buyer
            console.log(details);
            alert('Transaction completed by ' + details.payer.name.given_name + '!');
        });
    },

    onCancel: function(data) {
        alert('Transaction canceled.');
        },    

}).render('#paypal-button-container');





// paypal.Button.render({
//     env: 'sandbox',
//     client: {
//       sandbox: 'demo_sandbox_client_id',
//       production: 'demo_production_client_id'
//     },
//     // Customize button (optional)
//     locale: 'en_NG',
//     style: {
//       size: 'medium',
//       color: 'blue',
//       shape: 'pill',
//     },

//     // Enable Pay Now checkout flow (optional)
//     commit: true,

//     // Set up a payment
//     payment: function(data, actions) {
//       return actions.payment.create({
//         transactions: [{
//           amount: {
//             total: '0.01',
//             currency: 'USD',
//             details: {
//                 subtotal: '30.00',
//                 tax: '0.07',
//                 shipping: '0.03',
//                 handling_fee: '1.00',
//                 shipping_discount: '-1.00',
//                 insurance: '0.01'
//               }
//           },
          
//         }]
//       });
//     },
//     // Execute the payment
//     onAuthorize: function(data, actions) {
//       return actions.payment.execute().then(function() {
//         // Show a confirmation message to the buyer
//         window.alert('Thank you for your purchase!');
//       });
//     }
//   }, '#paypal-button');