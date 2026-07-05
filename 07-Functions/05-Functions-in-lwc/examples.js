// Event Handler
handleClick() {
    console.log("Button Clicked");
}

// Change Handler
handleChange(event) {
    this.searchKey = event.target.value;
}

// Dataset
handleDelete(event) {
    const recordId = event.target.dataset.id;
    console.log(recordId);
}

// Validation Helper
validate() {
    return this.name && this.name.trim().length > 0;
}

// Calculation Helper
calculateTotal(price, quantity) {
    return price * quantity;
}

// connectedCallback
connectedCallback() {
    this.loadAccounts();
}

// disconnectedCallback
disconnectedCallback() {
    clearInterval(this.timer);
}

// renderedCallback
renderedCallback() {
    console.log("Component Rendered");
}

// Imperative Apex
async loadAccounts() {
    try {
        this.accounts = await getAccounts();
    } catch (error) {
        this.handleError(error);
    }
}

// @wire Function
@wire(getAccounts)
wiredAccounts({ data, error }) {
    if (data) {
        this.accounts = data;
    } else if (error) {
        this.handleError(error);
    }
}

// Spinner Helpers
showSpinner() {
    this.isLoading = true;
}

hideSpinner() {
    this.isLoading = false;
}

// Toast Helper
showSuccessToast() {
    this.dispatchEvent(
        new ShowToastEvent({
            title: "Success",
            message: "Record Saved",
            variant: "success"
        })
    );
}

// Generic Error Handler
handleError(error) {
    console.error(error);
}

// Complete Save Flow
async handleSave() {
    try {
        this.showSpinner();

        if (!this.validate()) {
            return;
        }

        await saveAccount({
            account: this.account
        });

        this.showSuccessToast();

    } catch (error) {
        this.handleError(error);

    } finally {
        this.hideSpinner();
    }
}
