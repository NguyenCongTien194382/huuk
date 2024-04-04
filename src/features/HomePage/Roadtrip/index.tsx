import ListCardLocation from "@/components/ListCardLocation";
import Pagination from "@/components/ui/Pagination/Pagination";
import React from "react";
import Section from "@/components/layouts/Section";
import Container from "@/components/layouts/Container";

const Roadtrip = () => {
    return (
        <Container>
            <Section>
                <ListCardLocation
                    title="Highly Recommended Roadtrips"
                    subTitle="INSPIRATION"
                />
                <div className="mt-8 mb-10 md:mt-16 md:mb-20">
                    <Pagination total={1000} />
                </div>
            </Section>
        </Container>
    )
}

export default Roadtrip