import React from "react";

import Collections from "../../../components/sections/Collections";
import Layout from "../../../components/layouts/Layout";

export const Collection = () => {
    return (
        <Layout>
            <Collections
                title="Collection"
                subtitle="Stay hydrated with these cute companions."
                // fix image please we need 8 bit frog
                image="https://imgur.com/cScfraF.png"
                ctaText="Acquire New Frog"
                ctaLink="/hydrate"
            />
        </Layout>
    );
};
