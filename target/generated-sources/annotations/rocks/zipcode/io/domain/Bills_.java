package rocks.zipcode.io.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Bills.class)
public abstract class Bills_ {

	public static volatile SingularAttribute<Bills, String> companyName;
	public static volatile SingularAttribute<Bills, Long> paymentTotal;
	public static volatile SingularAttribute<Bills, Long> id;
	public static volatile SetAttribute<Bills, BillItem> billItems;
	public static volatile SingularAttribute<Bills, UserDetails> userDetails;

}

