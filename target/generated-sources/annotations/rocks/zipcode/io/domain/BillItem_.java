package rocks.zipcode.io.domain;

import java.time.LocalDate;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(BillItem.class)
public abstract class BillItem_ {

	public static volatile SingularAttribute<BillItem, Boolean> autoPay;
	public static volatile SingularAttribute<BillItem, String> companyName;
	public static volatile SingularAttribute<BillItem, LocalDate> dueDate;
	public static volatile SingularAttribute<BillItem, String> memo;
	public static volatile SingularAttribute<BillItem, Bills> bills;
	public static volatile SingularAttribute<BillItem, Long> id;
	public static volatile SingularAttribute<BillItem, LocalDate> paymentDate;
	public static volatile SingularAttribute<BillItem, Long> paymentAmount;

}

