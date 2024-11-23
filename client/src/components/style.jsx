import React from 'react';

const styles = {
    app: {
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
        width: "100vw",
    },
    header: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        padding: "1rem",
        backgroundColor: "#f5f5f5",
        borderBottom: "1px solid #ddd",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
    },
    searchBar: {
        flex: 1,
        padding: "0.5rem",
        borderRadius: "4px",
        border: "1px solid #ccc",
    },
    searchButton: {
        padding: "0.5rem 1rem",
        borderRadius: "4px",
        backgroundColor: "#28a745",
        color: "#fff",
        border: "none",
        cursor: "pointer",
    },
    container: {
        display: "flex",
        flex: "1",
        marginTop: "60px",
        overflow: "hidden",
    },
    sidebar: {
        width: "250px",
        padding: "1rem",
        backgroundColor: "#e0e0e0",
        borderRight: "1px solid #ddd",
        overflowY: "auto",
    },
    filterSection: {
        marginBottom: "1rem",
    },
    priceRange: {
        display: "flex",
        justifyContent: "space-between",
    },
    priceInput: {
        width: "45%",
        padding: "0.25rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
    },
    rangeInput: {
        width: "100%",
        margin: "0.5rem 0",
    },
    filterGroup: {
        marginBottom: "1rem",
    },
    filterOption: {
        display: "flex",
        alignItems: "center",
        marginBottom: "0.5rem",
    },
    propertyList: {
        flex: "1",
        padding: "1rem",
        overflowY: "auto",
    },
    resultsHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1rem",
    },
    sortDropdown: {
        padding: "0.5rem",
        borderRadius: "4px",
        border: "1px solid #ccc",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(333px, 1fr))",
        gap: "1rem",
    },
    propertyCard: {
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        backgroundColor: "#fff",
        textAlign: "center",
    },
    propertyImage: {
        width: "100%",
        height: "75%",
        borderRadius: "8px",
    },
    propertyName: {
        fontSize: "1rem",
        fontWeight: "bold",
        margin: "0.5rem 0",
    },
    propertyPrice: {
        color: "#28a745",
        fontSize: "0.9rem",
        margin: "0.5rem 0",
    },
    detailsButton: {
        backgroundColor: "#28a745",
        color: "#fff",
        padding: "0.5rem 1rem",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
  };
export default styles;